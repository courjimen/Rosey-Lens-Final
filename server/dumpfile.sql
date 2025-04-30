--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Homebrew)
-- Dumped by pg_dump version 14.17 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: favorites; Type: TABLE; Schema: public; Owner: tpl1122_12
--

CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    favorite_type character varying(50) NOT NULL,
    item_id integer NOT NULL
);


ALTER TABLE public.favorites OWNER TO tpl1122_12;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_12
--

CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO tpl1122_12;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_12
--

ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;


--
-- Name: guest_scores; Type: TABLE; Schema: public; Owner: tpl1122_12
--

CREATE TABLE public.guest_scores (
    id integer NOT NULL,
    firstname text NOT NULL,
    score integer NOT NULL,
    date_completed timestamp with time zone DEFAULT now(),
    mood_category text NOT NULL,
    message text NOT NULL
);


ALTER TABLE public.guest_scores OWNER TO tpl1122_12;

--
-- Name: guest_scores_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_12
--

CREATE SEQUENCE public.guest_scores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guest_scores_id_seq OWNER TO tpl1122_12;

--
-- Name: guest_scores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_12
--

ALTER SEQUENCE public.guest_scores_id_seq OWNED BY public.guest_scores.id;


--
-- Name: quiz_scores; Type: TABLE; Schema: public; Owner: tpl1122_12
--

CREATE TABLE public.quiz_scores (
    id integer NOT NULL,
    user_id integer NOT NULL,
    score integer NOT NULL,
    date_completed timestamp with time zone DEFAULT now(),
    mood_category text NOT NULL,
    message text NOT NULL
);


ALTER TABLE public.quiz_scores OWNER TO tpl1122_12;

--
-- Name: quiz_scores_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_12
--

CREATE SEQUENCE public.quiz_scores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.quiz_scores_id_seq OWNER TO tpl1122_12;

--
-- Name: quiz_scores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_12
--

ALTER SEQUENCE public.quiz_scores_id_seq OWNED BY public.quiz_scores.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl1122_12
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    firstname text NOT NULL,
    lastname text,
    email character varying(125) NOT NULL
);


ALTER TABLE public.users OWNER TO tpl1122_12;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_12
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_user_id_seq OWNER TO tpl1122_12;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_12
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);


--
-- Name: guest_scores id; Type: DEFAULT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.guest_scores ALTER COLUMN id SET DEFAULT nextval('public.guest_scores_id_seq'::regclass);


--
-- Name: quiz_scores id; Type: DEFAULT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.quiz_scores ALTER COLUMN id SET DEFAULT nextval('public.quiz_scores_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

COPY public.favorites (id, user_id, favorite_type, item_id) FROM stdin;
\.


--
-- Data for Name: guest_scores; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

COPY public.guest_scores (id, firstname, score, date_completed, mood_category, message) FROM stdin;
\.


--
-- Data for Name: quiz_scores; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

COPY public.quiz_scores (id, user_id, score, date_completed, mood_category, message) FROM stdin;
5	1	2	2025-04-28 12:25:55.785247-04	neutral	You're feeling bleh, here's a boost of positivity.
6	1	8	2025-04-28 12:30:53.990557-04	positive	You're feeling wonderfully positive.
7	5	-2	2025-04-28 12:32:24.993255-04	negative	You're feeling a bit low. Let's add some positivity.
8	5	8	2025-04-28 13:26:44.818516-04	positive	You're feeling such good energy.
9	5	8	2025-04-28 13:28:12.645023-04	positive	You're feeling truly bright.
10	5	0	2025-04-28 13:30:15.944711-04	neutral	You're feeling neutral, grab a sprinkle of good vibes.
11	5	-2	2025-04-28 13:31:41.110772-04	negative	You're feeling less than your usual self. Let's change that.
12	5	2	2025-04-28 13:36:57.151764-04	neutral	You're feeling okay, and a little extra brightness is on its way.
13	1	6	2025-04-28 18:22:51.143504-04	positive	You're feeling like pure sunshine.
14	1	8	2025-04-28 18:31:33.073777-04	positive	You're feeling truly bright.
15	1	-6	2025-04-28 18:46:55.79474-04	negative	You're feeling off. Let's change that.
16	1	-8	2025-04-28 18:52:23.214339-04	neutral	You're feeling okay, and a little extra brightness is on its way.
17	1	-8	2025-04-28 18:58:01.090478-04	neutral	You're feeling well, let's add some positive energy to your mood.
18	1	-4	2025-04-28 19:02:05.492026-04	neutral	You're feeling okay, and a little extra brightness is on its way.
19	1	-4	2025-04-28 19:12:13.347672-04	neutral	You're feeling okay, and a little extra brightness is on its way.
20	1	0	2025-04-28 19:16:21.726554-04	neutral	You're feeling neutral, grab a sprinkle of good vibes.
21	5	-2	2025-04-28 19:17:20.953666-04	neutral	You're feeling alright, and a touch of joy is coming your way.
22	5	-2	2025-04-28 19:24:13.602933-04	neutral	You're feeling bleh, here's a boost of positivity.
23	1	-2	2025-04-28 19:32:51.423179-04	neutral	You're feeling okay, and a little extra brightness is on its way.
24	1	2	2025-04-28 22:24:29.127312-04	neutral	You're feeling bleh, here's a boost of positivity.
25	5	0	2025-04-28 23:07:56.554823-04	neutral	You're feeling a bit strained, and a little extra brightness is on its way.
26	5	2	2025-04-29 00:30:58.121475-04	neutral	You're feeling alright, and a touch of joy is coming your way.
27	5	6	2025-04-29 00:35:22.019178-04	positive	You're feeling so radiant.
28	5	8	2025-04-29 00:37:10.833842-04	positive	You're feeling so radiant.
29	1	2	2025-04-29 00:41:10.390905-04	neutral	You're feeling neutral, grab a sprinkle of good vibes.
30	5	-8	2025-04-29 00:51:22.531026-04	neutral	You're feeling a bit strained, and a little extra brightness is on its way.
31	1	0	2025-04-29 00:56:55.01796-04	neutral	You're feeling alright, and a touch of joy is coming your way.
32	1	8	2025-04-29 00:59:03.448531-04	positive	You're feeling such good energy.
33	1	4	2025-04-29 01:00:19.589279-04	negative	You're feeling a bit low. Let's add some positivity.
34	1	0	2025-04-29 01:05:00.674509-04	neutral	You're feeling bleh, here's a boost of positivity.
35	1	-2	2025-04-29 01:08:32.779451-04	neutral	You're feeling neutral, grab a sprinkle of good vibes.
36	1	2	2025-04-29 01:10:49.348801-04	neutral	You're feeling alright, and a touch of joy is coming your way.
37	5	4	2025-04-29 01:21:21.055357-04	negative	You're feeling a bit low. Let's add some positivity.
38	1	4	2025-04-30 12:28:39.456383-04	negative	You're feeling a bit low. Let's add some positivity.
39	1	2	2025-04-30 17:57:06.758576-04	neutral	You're feeling alright, and a touch of joy is coming your way.
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

COPY public.users (user_id, firstname, lastname, email) FROM stdin;
1	Courey	Jimenez	coureyfrance@gmail.com
3	Courey	J	test@email.com
4	Courey	Jimenez	testingemail@gmail.com
5	Courey	Jimenez	coureychanel@gmail.com
\.


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);


--
-- Name: guest_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.guest_scores_id_seq', 5, true);


--
-- Name: quiz_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.quiz_scores_id_seq', 39, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.users_user_id_seq', 5, true);


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);


--
-- Name: favorites favorites_user_id_favorite_type_item_id_key; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_favorite_type_item_id_key UNIQUE (user_id, favorite_type, item_id);


--
-- Name: guest_scores guest_scores_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.guest_scores
    ADD CONSTRAINT guest_scores_pkey PRIMARY KEY (id);


--
-- Name: quiz_scores quiz_scores_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.quiz_scores
    ADD CONSTRAINT quiz_scores_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: quiz_scores quiz_scores_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.quiz_scores
    ADD CONSTRAINT quiz_scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- PostgreSQL database dump complete
--

