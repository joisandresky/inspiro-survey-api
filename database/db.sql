-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 19, 2019 at 06:17 AM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `inspiro_survey_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `survey_submission`
--

CREATE TABLE `survey_submission` (
  `survey_submission_id` int(11) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `answer` text NOT NULL,
  `question` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `survey_submission`
--
ALTER TABLE `survey_submission`
  ADD PRIMARY KEY (`survey_submission_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `survey_submission`
--
ALTER TABLE `survey_submission`
  MODIFY `survey_submission_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;