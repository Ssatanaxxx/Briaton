import jsonServer from "json-server";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs"; // ← добавить импорт

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const swaggerDocument = YAML.load(join(__dirname, "swagger/openAPI.yaml"));

// Загружаем данные
const productsData = JSON.parse(
  fs.readFileSync(join(__dirname, "data/products.json"), "utf-8")
);
const categoriesData = JSON.parse(
  fs.readFileSync(join(__dirname, "data/categories.json"), "utf-8")
);
const locationsData = JSON.parse(
  fs.readFileSync(join(__dirname, "data/locations.json"), "utf-8")
);
const faqData = JSON.parse(
  fs.readFileSync(join(__dirname, "data/faq.json"), "utf-8")
);

// Middleware
server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Кастомные роуты которые возвращают массивы
server.get("/api/v1/products", (req, res) => {
  // Возвращаем массив из данных
  const products = productsData.products || productsData.Products || [];
  res.json(products);
});

server.get("/api/v1/categories", (req, res) => {
  const categories =
    categoriesData.categories || categoriesData.Categories || [];
  res.json(categories);
});

server.get("/api/v1/locations", (req, res) => {
  const locations = locationsData.locations || locationsData.Location || [];
  res.json(locations);
});

server.get("/api/v1/faq", (req, res) => {
  const faq = faqData.faq || faqData.FAQ || [];
  res.json(faq);
});

// Остальные роуты через json-server
server.use(
  "/api/v1/auth/register",
  jsonServer.router(join(__dirname, "data/users.json"))
);
server.use(
  "/api/v1/orders",
  jsonServer.router(join(__dirname, "data/orders.json"))
);
server.use(
  "/api/v1/cart",
  jsonServer.router(join(__dirname, "data/cart.json"))
);

// Documentation
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Health check
server.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log("🚀 Магазин люстр и светильников API запущен!");
  console.log(`📚 Документация: http://localhost:${PORT}/docs`);
});
