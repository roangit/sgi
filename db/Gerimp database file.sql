-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Gerimp
-- -----------------------------------------------------
-- Base de gestão de implantações

-- -----------------------------------------------------
-- Schema Gerimp
--
-- Base de gestão de implantações
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Gerimp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `Gerimp` ;

-- -----------------------------------------------------
-- Table `Gerimp`.`tb_tecnico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`tb_tecnico` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gerimp`.`tb_vendedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`tb_vendedor` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gerimp`.`tb_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`tb_produto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gerimp`.`tb_implantacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`tb_implantacao` (
  `id` INT UNSIGNED NOT NULL,
  `cliente_id` INT UNSIGNED NOT NULL,
  `cliente_nome` VARCHAR(45) NOT NULL,
  `dt_entrada` DATE NOT NULL,
  `dt_assinatura` DATE NOT NULL,
  `vendedor_id` INT UNSIGNED NOT NULL,
  `tecnico_id` INT UNSIGNED NOT NULL,
  `produto_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`, `vendedor_id`, `tecnico_id`, `produto_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_tb_implantacao_tb_vendedor_idx` (`vendedor_id` ASC) VISIBLE,
  INDEX `fk_tb_implantacao_tb_tecnico1_idx` (`tecnico_id` ASC) VISIBLE,
  INDEX `fk_tb_implantacao_tb_produto1_idx` (`produto_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_implantacao_tb_vendedor`
    FOREIGN KEY (`vendedor_id`)
    REFERENCES `Gerimp`.`tb_vendedor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_implantacao_tb_tecnico1`
    FOREIGN KEY (`tecnico_id`)
    REFERENCES `Gerimp`.`tb_tecnico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_implantacao_tb_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `Gerimp`.`tb_produto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gerimp`.`tb_grisco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`tb_grisco` (
  `tb_implantacao_id` INT UNSIGNED NOT NULL,
  `dt_avaliacao` DATE NOT NULL,
  `score` DECIMAL(3,2) UNSIGNED NOT NULL,
  PRIMARY KEY (`tb_implantacao_id`, `dt_avaliacao`),
  INDEX `fk_tb_grisco_tb_implantacao1_idx` (`tb_implantacao_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_grisco_tb_implantacao1`
    FOREIGN KEY (`tb_implantacao_id`)
    REFERENCES `Gerimp`.`tb_implantacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Gerimp`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Gerimp`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
