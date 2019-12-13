CREATE DATABASE cmpos
GO
USE [cmpos]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[product_id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Image] [nvarchar](max) NULL,
	[Stock] [int] NOT NULL,
	[Price] [int] NOT NULL,
	[Created] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED
(
	[product_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Products] ON

INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (1, N'NodeMCU Development Kit V2 แถมสาย USB (Node MCU)', N'product_22.jpg', 0, 280, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (2, N'Arduino Sensor Shield V5.0', N'product_11.jpg', 100, 150, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (3, N'DHT 22 - Temp. Sensor', N'product_15.jpg', 1000, 300, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (4, N'DotMatrix LED Display', N'product_14.jpg', 1000, 300, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (5, N'IR Flame Detector Module (ตรวจจับเปลวไฟด้วย Infrared)', N'product_20.jpg', 100, 290, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (6, N'IR Flame Detector Module (ตรวจจับเปลวไฟด้วย Infrared)', N'product_19.jpg', 60, 100, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (7, N'NodeMCU32', N'product_17.jpg', 1000, 300, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (8, N'Raining Sensor', N'product_16.jpg', 1000, 300, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (9, N'Arduino UNO R3 แถมสาย USB Type A Male/B Male Cable', N'product_04.jpg', 1000, 300, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (10, N'WeMos D1 R2 WiFi ESP8266 Development Board Compatible Arduino UNO', N'product_21.jpg', 100, 370, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (11, N'Arduino ProtoShield Mini UNO Prototype Shield พร้อม Mini Breadboard', N'product_12.jpg', 100, 60, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (12, N'Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB', N'product_23.jpg', 2, 130, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (13, N'Arduino MEGA 2560 R3 ใช้ชิฟ USB CH340 รุ่นใหม่ แถมสาย USB', N'product_05.jpg', 100, 200, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (14, N'4-Channel 5VDC Relay Module Relay Active High / LOW', N'product_07.jpg', 1, 185, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (15, N'4-Channel 5VDC Relay Module Relay Active High / LOW', N'product_01.jpg', 1, 185, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (16, N'4-Channel 5VDC Relay Module Relay Active High / LOW', N'product_02.jpg', 1, 185, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Products] ([product_id], [Name], [Image], [Stock], [Price], [Created]) VALUES (17, N'Arduino Sensor Kit V5.0', N'product_10.jpg', 13, 150, CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Products] OFF
ALTER TABLE [dbo].[Products] ADD  DEFAULT (getdate()) FOR [Created]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Transactions](
	[transaction_id] [int] IDENTITY(1,1) NOT NULL,
	[Subtotal] [int] NOT NULL,
	[Discount] [int] NOT NULL,
	[shipping_cost] [int] NOT NULL,
	[tax_percent] [int] NOT NULL,
	[Total] [int] NOT NULL,
	[Paid] [int] NOT NULL,
	[Change] [int] NOT NULL,
	[order_list] [nvarchar](max) NOT NULL,
	[payment_type] [nvarchar](max) NULL,
	[payment_detail] [nvarchar](max) NULL,
	[employee_id] [nvarchar](max) NOT NULL,
	[seller_id] [nvarchar](max) NULL,
	[buyer_id] [nvarchar](max) NULL,
	[Comment] [nvarchar](max) NULL,
	[Timestamp] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Transactions] PRIMARY KEY CLUSTERED
(
	[transaction_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Transactions] ON

INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (1, 0, 0, 0, 0, 1535, 1535, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d35","productId":12,"name":"Arduino UNO R3 แถมสาย USB Type A Male/B Male Cable","image":"product_04.jpg","stock":1000,"price":300,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d73","productId":11,"image":"product_23.jpg","name":"Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB","price":130,"stock":2,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d69","productId":7,"image":"product_19.jpg","name":"IR Flame Detector Module (ตรวจจับเปลวไฟด้วย Infrared)","price":60,"stock":100,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d50","productId":3,"name":"4-Channel 5VDC Relay Module Relay Active High / LOW","image":"product_07.jpg","stock":1,"price":185,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d70","productId":8,"image":"product_20.jpg","name":"ESP8266 web Sever serial WiFi Expansion board - shield ESP-12E for arduino R3","stock":100,"price":290,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d63","productId":13,"image":"product_05.jpg","name":"Arduino MEGA 2560 R3 ใช้ชิฟ USB CH340 รุ่นใหม่ แถมสาย USB","stock":100,"price":200,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d71","image":"product_21.jpg","productId":9,"name":"WeMos D1 R2 WiFi ESP8266 Development Board Compatible Arduino UNO","stock":100,"price":370,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (2, 0, 0, 0, 0, 700, 700, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d72","productId":10,"image":"product_22.jpg","name":"NodeMCU Development Kit V2 แถมสาย USB (Node MCU)","stock":0,"price":280,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d73","productId":11,"image":"product_23.jpg","name":"Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB","price":130,"stock":2,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d70","productId":8,"image":"product_20.jpg","name":"ESP8266 web Sever serial WiFi Expansion board - shield ESP-12E for arduino R3","stock":100,"price":290,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (3, 0, 0, 0, 0, 670, 670, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d50","productId":3,"name":"4-Channel 5VDC Relay Module Relay Active High / LOW","image":"product_07.jpg","stock":1,"price":185,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5b5ecf26581ff42b3c819aef","productId":1,"name":"4-Channel 5VDC Relay Module Relay Active High / LOW","image":"product_01.jpg","stock":1,"price":185,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5b5ed24c581ff42b3c819c44","productId":16,"name":"Raining Sensor","image":"product_16.jpg","stock":1000,"price":300,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (4, 0, 0, 0, 0, 1040, 1040, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d73","productId":11,"image":"product_23.jpg","name":"Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB","price":130,"stock":2,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":8}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (5, 0, 0, 0, 0, 630, 630, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d73","productId":11,"image":"product_23.jpg","name":"Arduino Nano 3.0 Mini USB รุ่นใหม่ใช้ชิฟ CH340G แถมสาย Mini USB","price":130,"stock":2,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d35","productId":12,"name":"Arduino UNO R3 แถมสาย USB Type A Male/B Male Cable","image":"product_04.jpg","stock":1000,"price":300,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d63","productId":13,"image":"product_05.jpg","name":"Arduino MEGA 2560 R3 ใช้ชิฟ USB CH340 รุ่นใหม่ แถมสาย USB","stock":100,"price":200,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (6, 0, 0, 0, 0, 200, 200, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d63","productId":13,"image":"product_05.jpg","name":"Arduino MEGA 2560 R3 ใช้ชิฟ USB CH340 รุ่นใหม่ แถมสาย USB","stock":100,"price":200,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
INSERT [dbo].[Transactions] ([transaction_id], [Subtotal], [Discount], [shipping_cost], [tax_percent], [Total], [Paid], [Change], [order_list], [payment_type], [payment_detail], [employee_id], [seller_id], [buyer_id], [Comment], [Timestamp]) VALUES (7, 0, 0, 0, 0, 335, 335, 0, N'[{"_id":"5abd69902ded8b1b1a6f7d50","productId":3,"name":"4-Channel 5VDC Relay Module Relay Active High / LOW","image":"product_07.jpg","stock":1,"price":185,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1},{"_id":"5abd69902ded8b1b1a6f7d57","productId":4,"image":"product_10.jpg","name":"Arduino Sensor Kit V5.0","stock":13,"price":150,"created":"2018-03-30T00:11:45.109Z","__v":0,"qty":1}]', N'cash', NULL, N'1', N'sr0001', N'by0000', N'X', CAST(N'2019-06-15T03:10:54.6366667' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Transactions] OFF
ALTER TABLE [dbo].[Transactions] ADD  DEFAULT (getdate()) FOR [Timestamp]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](450) NOT NULL,
	[Password] [nvarchar](max) NULL,
	[Position] [nvarchar](max) NULL,
	[Created] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Users] ON

INSERT [dbo].[Users] ([ID], [Username], [Password], [Position], [Created]) VALUES (1, N'admin', N'hnez/G60/i8loUU6c8rV+g==.IsF2GPSNy9oSlDTRob76v8cEQboCNTSXcwLCcLyS/xc=', N'Admin', CAST(N'2019-06-15T03:10:54.6400000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Users] OFF
SET ANSI_PADDING ON
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [AK_Users_Username] UNIQUE NONCLUSTERED
(
	[Username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT (N'Cashier') FOR [Position]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT (getdate()) FOR [Created]
GO

