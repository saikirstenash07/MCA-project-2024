create database  spbank ;

use spbank ;

show tables ;

CREATE TABLE
    `customer` (
        `user_id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(100) NOT NULL,
        `email` varchar(100) NOT NULL,
        `mobile_number` varchar(20) NOT NULL,
        `pwd` varchar(500) NOT NULL,
        `role` varchar(100) NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`user_id`)
);

INSERT INTO
    `customer` (
        `name`,
        `email`,
        `mobile_number`,
        `pwd`,
        `role`,
        `create_dt`
    )
VALUES (
        'Happy',
        'happy@example.com',
        '9876548337',
        '$2y$12$oRRbkNfwuR8ug4MlzH5FOeui1mkd.RsOAJMbykTSupVy.x/vb2',
        'admin',
        CURDATE()
    );

CREATE TABLE
    `accounts` (
        `user_id` int NOT NULL,
        `account_number` int NOT NULL,
        `account_type` varchar(100) NOT NULL,
        `branch_address` varchar(200) NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`account_number`),
        KEY `user_id` (`user_id`),
        CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`) ON DELETE CASCADE
    );

INSERT INTO
    `accounts` (
        `user_id`,
        `account_number`,
        `account_type`,
        `branch_address`,
        `create_dt`
    )
VALUES (
        4,
        1865764534,
        'Savings',
        '123 Main Street, New York',
        CURDATE()
    );

CREATE TABLE
    `account_transactions` (
        `transaction_id` varchar(200) NOT NULL,
        `account_number` int NOT NULL,
        `user_id` int NOT NULL,
        `transaction_dt` date NOT NULL,
        `transaction_summary` varchar(200) NOT NULL,
        `transaction_type` varchar(100) NOT NULL,
        `transaction_amt` int NOT NULL,
        `closing_balance` int NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`transaction_id`),
        KEY `user_id` (`user_id`),
        KEY `account_number` (`account_number`),
        CONSTRAINT `accounts_ibfk_2` FOREIGN KEY (`account_number`) REFERENCES `accounts` (`account_number`) ON DELETE CASCADE,
        CONSTRAINT `acct_user_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`) ON DELETE CASCADE
);

-- Query 1

SET FOREIGN_KEY_CHECKS=0 ;

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 7 DAY),
        'Coffee Shop',
        'Withdrawal',
        30,
        34500,
        DATE_SUB(CURDATE(), INTERVAL 7 DAY)
    );

-- Query 2

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 6 DAY),
        'Uber',
        'Withdrawal',
        100,
        34400,
        DATE_SUB(CURDATE(), INTERVAL 6 DAY)
    );

-- Query 3

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 5 DAY),
        'Self Deposit',
        'Deposit',
        500,
        34900,
        DATE_SUB(CURDATE(), INTERVAL 5 DAY)
    );

-- Query 4

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 4 DAY),
        'Ebay',
        'Withdrawal',
        600,
        34300,
        DATE_SUB(CURDATE(), INTERVAL 4 DAY)
    );

-- Query 5

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 2 DAY),
        'OnlineTransfer',
        'Deposit',
        700,
        35000,
        DATE_SUB(CURDATE(), INTERVAL 2 DAY)
    );

-- Query 6

INSERT INTO
    `account_transactions` (
        `transaction_id`,
        `account_number`,
        `user_id`,
        `transaction_dt`,
        `transaction_summary`,
        `transaction_type`,
        `transaction_amt`,
        `closing_balance`,
        `create_dt`
    )
VALUES (
        UUID(),
        1865764534,
        4,
        DATE_SUB(CURDATE(), INTERVAL 1 DAY),
        'Amazon.com',
        'Withdrawal',
        100,
        34900,
        DATE_SUB(CURDATE(), INTERVAL 1 DAY)
    );

CREATE TABLE
    `loans` (
        `loan_number` int NOT NULL AUTO_INCREMENT,
        `user_id` int NOT NULL,
        `start_dt` date NOT NULL,
        `loan_type` varchar(100) NOT NULL,
        `total_loan` int NOT NULL,
        `amount_paid` int NOT NULL,
        `outstanding_amount` int NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`loan_number`),
        KEY `user_id` (`user_id`),
        CONSTRAINT `loan_customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`) ON DELETE CASCADE
    );

INSERT INTO
    `loans` (
        `loan_number`,
        `user_id`,
        `start_dt`,
        `loan_type`,
        `total_loan`,
        `amount_paid`,
        `outstanding_amount`,
        `create_dt`
    )
VALUES (
        123123542,
        4,
        '2020-10-13',
        'Home',
        200000,
        50000,
        150000,
        '2020-10-13'
    );

INSERT INTO
    `loans` (
    `loan_number`,
        `user_id`,
        `start_dt`,
        `loan_type`,
        `total_loan`,
        `amount_paid`,
        `outstanding_amount`,
        `create_dt`
    )
VALUES (
        '2542545424',
        1,
        '2020-06-06',
        'Vehicle',
        40000,
        10000,
        30000,
        '2020-06-06'
    );

INSERT INTO
    `loans` (
       `loan_number`,
        `user_id`,
        `start_dt`,
        `loan_type`,
        `total_loan`,
        `amount_paid`,
        `outstanding_amount`,
        `create_dt`
    )
VALUES (
        1,
        '15252412',
        '2018-02-14',
        'Home',
        50000,
        10000,
        40000,
        '2018-02-14'
    );

INSERT INTO
    `loans` (
    `loan_number`,
        `user_id`,
        `start_dt`,
        `loan_type`,
        `total_loan`,
        `amount_paid`,
        `outstanding_amount`,
        `create_dt`
    )
VALUES (
        '25423',
        1,
        '2018-02-14',
        'Personal',
        10000,
        3500,
        6500,
        '2018-02-14'
    );

CREATE TABLE
    `cards` (
        `card_id` int NOT NULL AUTO_INCREMENT,
        `card_number` varchar(100) NOT NULL,
        `user_id` int NOT NULL,
        `card_type` varchar(100) NOT NULL,
        `total_limit` int NOT NULL,
        `amount_used` int NOT NULL,
        `available_amount` int NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`card_id`),
        KEY `user_id` (`user_id`),
        CONSTRAINT `card_customer_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`) ON DELETE CASCADE
    );

INSERT INTO
    `cards` ( 
         `card_id` ,
        `card_number`,
        `user_id`,
        `card_type`,
        `total_limit`,
        `amount_used`,
        `available_amount`,
        `create_dt`
    )
VALUES (  
        1,
        '4565XXXX4656',
        4,
        'Credit',
        10000,
        500,
        9500,
        CURDATE()
    );

INSERT INTO
   `cards` ( 
         `card_id` ,
        `card_number`,
        `user_id`,
        `card_type`,
        `total_limit`,
        `amount_used`,
        `available_amount`,
        `create_dt`
    )
VALUES ( 
2 ,
        '3455XXXX8673',
        4,
        'Credit',
        7500,
        600,
        6900,
        CURDATE()
    );

INSERT INTO
   `cards` ( 
         `card_id` ,
        `card_number`,
        `user_id`,
        `card_type`,
        `total_limit`,
        `amount_used`,
        `available_amount`,
        `create_dt`
    )
VALUES ( 
3 ,
        '2359XXXX9346',
        4,
        'Credit',
        20000,
        4000,
        16000,
        CURDATE()
    );

CREATE TABLE
    `notice_details` (
        `notice_id` int NOT NULL AUTO_INCREMENT,
        `notice_summary` varchar(200) NOT NULL,
        `notice_details` varchar(500) NOT NULL,
        `notic_beg_dt` date NOT NULL,
        `notic_end_dt` date DEFAULT NULL,
        `create_dt` date DEFAULT NULL,
        `update_dt` date DEFAULT NULL,
        PRIMARY KEY (`notice_id`)
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'Home Loan Interest rates reduced',
        'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'Net Banking Offers',
        'Customers who will opt for Internet banking while opening a saving account will get a $50 amazon voucher',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'Mobile App Downtime',
        'The mobile application of the EazyBank will be down from 2AM-5AM on 12/05/2020 due to maintenance activities',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'E Auction notice',
        'There will be a e-auction on 12/08/2020 on the Bank website for all the stubborn arrears.Interested parties can participate in the e-auction',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'Launch of Millennia Cards',
        'Millennia Credit Cards are launched for the premium customers of EazyBank. With these cards, you will get 5% cashback for each purchase',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

INSERT INTO
    `notice_details` (
        `notice_summary`,
        `notice_details`,
        `notic_beg_dt`,
        `notic_end_dt`,
        `create_dt`,
        `update_dt`
    )
VALUES (
        'COVID-19 Insurance',
        'EazyBank launched an insurance policy which will cover COVID-19 expenses. Please reach out to the branch for more details',
        CURDATE() - INTERVAL 30 DAY,
        CURDATE() + INTERVAL 30 DAY,
        CURDATE(),
        null
    );

CREATE TABLE
    `contact_messages` (
        `contact_id` varchar(50) NOT NULL,
        `contact_name` varchar(50) NOT NULL,
        `contact_email` varchar(100) NOT NULL,
        `subject` varchar(500) NOT NULL,
        `message` varchar(2000) NOT NULL,
        `create_dt` date DEFAULT NULL,
        PRIMARY KEY (`contact_id`)
    );
    
    
    
CREATE TABLE `authorities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `customer` (`user_id`)
);

-- INSERT INTO `authorities` (`user_id`, `name`)
--  VALUES (1, 'VIEWACCOUNT');

-- INSERT INTO `authorities` (`user_id`, `name`)
--  VALUES (1, 'VIEWCARDS');

--  INSERT INTO `authorities` (`user_id`, `name`)
--   VALUES (1, 'VIEWLOANS');

--  INSERT INTO `authorities` (`user_id`, `name`)
--    VALUES (1, 'VIEWBALANCE');


--  DELETE FROM `authorities`;

--  INSERT INTO `authorities` (`user_id`, `name`)
--   VALUES (1, 'ROLE_USER');

--  INSERT INTO `authorities` (`user_id`, `name`)
--   VALUES (1, 'ROLE_ADMIN');

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

INSERT INTO roles(name) VALUES(1);
INSERT INTO roles(name) VALUES(2);
INSERT INTO roles(name) VALUES(3);

