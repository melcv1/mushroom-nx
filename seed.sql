
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- Creación de la tabla movies
CREATE TABLE [dbo].[movies](
	[idMovie] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](max) NULL,
	[description] [nvarchar](50) NULL,
	[time] [nvarchar](50) NULL,
	[image] [text] NULL,
	[status] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[movies] ADD CONSTRAINT [PK_movies] PRIMARY KEY CLUSTERED 
(
	[idMovie] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

-- Creación de la tabla showtimes
CREATE TABLE [dbo].[showtimes](
	[idShowtime] [int] IDENTITY(1,1) NOT NULL,
	[idMovie] [int] NOT NULL,
	[date] [date] NOT NULL,
	[time] [varchar](50) NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[showtimes] ADD CONSTRAINT [PK_showtimes] PRIMARY KEY CLUSTERED 
(
	[idShowtime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

ALTER TABLE [dbo].[showtimes]  WITH CHECK ADD  CONSTRAINT [FK_showtimes_movies] FOREIGN KEY([idMovie])
REFERENCES [dbo].[movies] ([idMovie])
GO

ALTER TABLE [dbo].[showtimes] CHECK CONSTRAINT [FK_showtimes_movies]
GO

-- Inserción de datos en la tabla movies
insert into movies (name, description, time, image, status) values ('Barbie', 'The film follows the pair on a journey', '1:54 mins', 'https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg',1)
insert into showtimes (idMovie, date, time) values (SCOPE_IDENTITY(), GETDATE(), '13PM')

insert into movies (name, description, time, image, status) values ('Wonka', 'Willy Wonka and how he visited the Oompa-Loompas', '1:54 mins', 'https://es.web.img3.acsta.net/pictures/23/11/14/17/56/0356452.jpg',1)
insert into showtimes (idMovie, date, time) values (SCOPE_IDENTITY(), GETDATE(), '14PM')

insert into movies (name, description, time, image, status) values ('Madame Web', 'Madame Web is an american superheroes movie', '1:54 mins', 'https://es.web.img3.acsta.net/pictures/23/12/13/12/59/0317379.jpg',1)
insert into showtimes (idMovie, date, time) values (SCOPE_IDENTITY(), GETDATE(), '14PM')

insert into movies (name, description, time, image, status) values ('Bob Marley', 'The legend : Bob Marley. New Movie', '1:54 mins', 'https://mx.web.img2.acsta.net/pictures/23/12/11/18/58/5310461.jpg',1)
insert into showtimes (idMovie, date, time) values (SCOPE_IDENTITY(), GETDATE(), '14PM')

insert into movies (name, description, time, image, status) values ('Dinosaur World', 'Movie dinosaurios for warning 2024! ', '1:54 mins', 'https://m.media-amazon.com/images/M/MV5BNmUwYzg5MDctN2ZmYy00OTI2LWExMzYtNGUxMGFiOWQ5MzdmXkEyXkFqcGdeQXVyMTA5MTc4NDY2._V1_.jpg',1)
insert into showtimes (idMovie, date, time) values (SCOPE_IDENTITY(), GETDATE(), '14PM')

