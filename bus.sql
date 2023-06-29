use st65084db;

create table busroute (
    routenumber int,
    ticketprice numeric(4,2),
    start char(20),
    end char(20),
    primary key(routenumber)
);

create table routestop (
    routenumber int,
    stop char(20),
    primary key(routenumber, stop),
    foreign key (routenumber)
    references busroute(routenumber)
);

create table timetable (
    routenumber int,
    stopstation char(20),
    starttime time,
    stoptime time,
    primary key (
        routenumber,
        starttime,
        stopstation
    ),
    foreign key (routenumber)
    references busroute(routenumber)
);

insert into busroute values
(75, 20.00, 'Watput','Watpho'),
(21, 25.00, 'Watkusang','Chula'),
(88, 25.00, 'KMUTT','Taladpho');

insert into routestop values
(75, 'Watput'),
(75, 'KMUTT'),
(75, 'Chetupol'),
(75, 'Bangpakok'),
(75, 'Haulumpong'),
(75, 'Watpho');

insert into timetable values
(75, 'Watput', '08:00:00', '08:00:00'),
(75, 'KMUTT', '08:00:00', '08:10:00'),
(75, 'Chetupol', '08:00:00', '08:25:00'),
(75, 'Bangpakok', '08:00:00', '08:30:00'),
(75, 'Haulumpong', '08:00:00', '08:50:00'),
(75, 'Watpho', '08:00:00', '09:20:00');

insert into timetable values
(75, 'Watput', '08:30:00', '08:30:00'),
(75, 'KMUTT', '08:30:00', '08:40:00'),
(75, 'Chetupol', '08:30:00', '09:00:00'),
(75, 'Bangpakok', '08:30:00', '09:10:00'),
(75, 'Haulumpong', '08:30:00', '09:30:00'),
(75, 'Watpho', '08:30:00', '09:50:00');
