import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1677575624903 implements MigrationInterface {
  name = 'SeedDb1677575624903';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    //password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('foo', 'foo@gmail.com', '$2b$10$4QVJEMT4hmfsgiQR0.8mIuii9OOnaU3aEfGdLjXpwFI3pHJWFoN26')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee,dragons', 1)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`DROP TABLE "tags"`);
  }
}
