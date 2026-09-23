import { Project } from "@/types/projects"

export const myFinancesApi: Project = {
  name: "My Finances API",
  type: "software",
  cover: "/projects/my-finances-api.png",
  description: [
    "Backend foundation for a personal finance application built with Java, Spring Boot, Spring Data JPA, and PostgreSQL. The API currently supports user registration and authentication, financial accounts, categories, and basic transactions through REST endpoints.",

    "The application follows a structured Controller → Service → Repository architecture, with related classes organized around each domain entity. Shared interfaces and abstract classes define common entity and service behavior, reducing duplication and establishing consistent patterns as new domains are added.",

    "The project includes JWT-based authentication along with custom validation, DTO and entity mapping utilities, response handling, and application-specific exceptions. Service tests cover core CRUD behavior, while entity tests verify structural conventions and required persistence annotations.",

    "The project is intentionally at an early stage and currently serves as the backend foundation for a larger personal finance application. Development is paused while I focus on other projects, but the codebase remains a practical environment for exploring and refining Java and Spring Boot application architecture.",
  ],
  links: [
    {
      title: "GitHub",
      href: "https://github.com/JeisonEccel/my-finances-api",
      icon: "/icons/github.svg",
    },
  ],
}
