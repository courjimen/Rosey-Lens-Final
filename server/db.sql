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
    item_id text NOT NULL,
    book_name character varying(100),
    verse_text text
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
-- Name: guest; Type: TABLE; Schema: public; Owner: tpl1122_12
--

CREATE TABLE public.guest (
    user_id integer NOT NULL,
    firstname text NOT NULL
);


ALTER TABLE public.guest OWNER TO tpl1122_12;

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
-- Name: guest_user_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl1122_12
--

CREATE SEQUENCE public.guest_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guest_user_id_seq OWNER TO tpl1122_12;

--
-- Name: guest_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl1122_12
--

ALTER SEQUENCE public.guest_user_id_seq OWNED BY public.guest.user_id;


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
-- Name: guest user_id; Type: DEFAULT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.guest ALTER COLUMN user_id SET DEFAULT nextval('public.guest_user_id_seq'::regclass);


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

INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (1, 5, 'affirmation', 'It''s time to create a life filled with purpose and passion. Don''t give up now, shower yourself with love and give yourself the grace you share with others.', NULL, NULL);
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (2, 5, 'affirmation', 'Nothing can dim the light which shines from within - Maya Angelou. Find one thing today that makes you smile.', NULL, NULL);
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (6, 1, 'affirmation', 'Trust your path, you are exactly where you need to be. Have faith in the journey, for it is unfolding perfectly to guide you towards your destiny.', NULL, NULL);
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (7, 1, 'affirmation', 'Make each day your masterpiece. You have a kindness and positive vibe that will carry you to new heights this week! Keep being what you want to see in the world', NULL, NULL);
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (16, 5, 'Bible Verse', '37:23', 'Psalms', 'The LORD grants success to the one whose behavior he finds commendable.');
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (18, 5, 'Affirmation', 'The way you navigate challenges with such grace is a testament to your inner fortitude, serving as a powerful example for those around you. Keep moving forward.', NULL, NULL);
INSERT INTO public.favorites (id, user_id, favorite_type, item_id, book_name, verse_text) VALUES (20, 1, 'Bible Verse', '2:4', 'Habakkuk', 'Look, the one whose desires are not upright will faint from exhaustion, but the person of integrity will live because of his faithfulness.');


--
-- Data for Name: guest; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--



--
-- Data for Name: guest_scores; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--



--
-- Data for Name: quiz_scores; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (5, 1, 2, '2025-04-28 12:25:55.785247-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (6, 1, 8, '2025-04-28 12:30:53.990557-04', 'positive', 'You''re feeling wonderfully positive.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (7, 5, -2, '2025-04-28 12:32:24.993255-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (8, 5, 8, '2025-04-28 13:26:44.818516-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (9, 5, 8, '2025-04-28 13:28:12.645023-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (10, 5, 0, '2025-04-28 13:30:15.944711-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (11, 5, -2, '2025-04-28 13:31:41.110772-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (12, 5, 2, '2025-04-28 13:36:57.151764-04', 'neutral', 'You''re feeling okay, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (13, 1, 6, '2025-04-28 18:22:51.143504-04', 'positive', 'You''re feeling like pure sunshine.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (14, 1, 8, '2025-04-28 18:31:33.073777-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (15, 1, -6, '2025-04-28 18:46:55.79474-04', 'negative', 'You''re feeling off. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (16, 1, -8, '2025-04-28 18:52:23.214339-04', 'neutral', 'You''re feeling okay, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (17, 1, -8, '2025-04-28 18:58:01.090478-04', 'neutral', 'You''re feeling well, let''s add some positive energy to your mood.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (18, 1, -4, '2025-04-28 19:02:05.492026-04', 'neutral', 'You''re feeling okay, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (19, 1, -4, '2025-04-28 19:12:13.347672-04', 'neutral', 'You''re feeling okay, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (20, 1, 0, '2025-04-28 19:16:21.726554-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (21, 5, -2, '2025-04-28 19:17:20.953666-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (22, 5, -2, '2025-04-28 19:24:13.602933-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (23, 1, -2, '2025-04-28 19:32:51.423179-04', 'neutral', 'You''re feeling okay, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (24, 1, 2, '2025-04-28 22:24:29.127312-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (25, 5, 0, '2025-04-28 23:07:56.554823-04', 'neutral', 'You''re feeling a bit strained, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (26, 5, 2, '2025-04-29 00:30:58.121475-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (27, 5, 6, '2025-04-29 00:35:22.019178-04', 'positive', 'You''re feeling so radiant.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (28, 5, 8, '2025-04-29 00:37:10.833842-04', 'positive', 'You''re feeling so radiant.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (29, 1, 2, '2025-04-29 00:41:10.390905-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (30, 5, -8, '2025-04-29 00:51:22.531026-04', 'neutral', 'You''re feeling a bit strained, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (31, 1, 0, '2025-04-29 00:56:55.01796-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (32, 1, 8, '2025-04-29 00:59:03.448531-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (33, 1, 4, '2025-04-29 01:00:19.589279-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (34, 1, 0, '2025-04-29 01:05:00.674509-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (35, 1, -2, '2025-04-29 01:08:32.779451-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (36, 1, 2, '2025-04-29 01:10:49.348801-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (37, 5, 4, '2025-04-29 01:21:21.055357-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (38, 1, 4, '2025-04-30 12:28:39.456383-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (39, 1, 2, '2025-04-30 17:57:06.758576-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (40, 1, 4, '2025-04-30 22:30:53.988451-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (42, 1, 4, '2025-04-30 23:21:06.076125-04', 'negative', 'You''re feeling down. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (43, 1, 8, '2025-04-30 23:28:19.650136-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (44, 1, 2, '2025-04-30 23:47:50.552632-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (45, 1, 6, '2025-05-01 01:07:47.768345-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (46, 1, 4, '2025-05-01 01:35:07.126886-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (47, 1, 4, '2025-05-01 01:40:28.303519-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (48, 1, 6, '2025-05-01 02:43:28.846114-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (49, 1, 6, '2025-05-01 02:43:30.225809-04', 'positive', 'You''re feeling so radiant.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (50, 5, 2, '2025-05-01 02:48:15.440716-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (51, 1, 0, '2025-05-01 02:51:01.868291-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (52, 5, 4, '2025-05-01 03:18:06.52249-04', 'negative', 'You''re feeling bad vibes. Let''s get a moment of peace.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (53, 5, 4, '2025-05-01 03:19:21.200155-04', 'negative', 'You''re feeling off. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (54, 5, 6, '2025-05-01 03:19:24.353799-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (55, 5, -8, '2025-05-01 03:20:00.546591-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (56, 5, 2, '2025-05-01 03:20:36.334586-04', 'neutral', 'You''re feeling a bit strained, and a little extra brightness is on its way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (57, 5, 8, '2025-05-01 03:22:18.154435-04', 'positive', 'You''re feeling like pure sunshine.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (58, 1, -6, '2025-05-01 03:23:45.450593-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (59, 1, 0, '2025-05-01 03:57:23.54262-04', 'negative', 'You''re feeling a bit low. Let''s add some positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (60, 5, 2, '2025-05-01 04:27:00.72196-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (61, 5, 4, '2025-05-01 22:04:59.209525-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (62, 5, 2, '2025-05-01 23:12:23.071205-04', 'neutral', 'You''re feeling neutral, grab a sprinkle of good vibes.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (63, 1, 2, '2025-05-01 23:46:43.051951-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (64, 5, 0, '2025-05-02 00:24:20.02562-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (65, 5, 0, '2025-05-02 00:24:23.106766-04', 'negative', 'You''re feeling off. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (66, 5, 0, '2025-05-02 00:30:34.700424-04', 'negative', 'You''re feeling down. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (67, 5, 0, '2025-05-02 00:30:35.583205-04', 'negative', 'You''re feeling off. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (68, 5, -2, '2025-05-02 00:30:36.435846-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (69, 5, 2, '2025-05-02 00:30:37.174487-04', 'neutral', 'You''re feeling well, let''s add some positive energy to your mood.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (70, 1, 8, '2025-05-02 00:54:51.748924-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (71, 1, 8, '2025-05-02 01:09:00.410621-04', 'positive', 'You''re feeling like pure sunshine.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (72, 1, 6, '2025-05-02 01:10:23.117763-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (73, 5, 8, '2025-05-02 01:13:53.637789-04', 'positive', 'You''re feeling like pure sunshine.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (74, 5, 6, '2025-05-02 01:17:21.475992-04', 'positive', 'You''re feeling so radiant.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (75, 5, 8, '2025-05-02 01:19:37.548879-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (76, 5, -4, '2025-05-02 01:20:17.605307-04', 'negative', 'You''re feeling down. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (77, 5, -8, '2025-05-02 01:23:02.024243-04', 'negative', 'You''re feeling off. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (78, 5, 8, '2025-05-02 01:37:48.6283-04', 'positive', 'You''re feeling like pure sunshine.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (79, 5, -2, '2025-05-02 01:40:31.947385-04', 'negative', 'You''re feeling less than your usual self. Let''s change that.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (80, 5, 8, '2025-05-02 02:04:20.175014-04', 'positive', 'You''re feeling such good energy.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (81, 5, 2, '2025-05-02 02:10:32.261773-04', 'neutral', 'You''re feeling alright, and a touch of joy is coming your way.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (82, 5, 6, '2025-05-02 02:31:10.814555-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (83, 5, 2, '2025-05-02 02:35:42.904566-04', 'neutral', 'You''re feeling well, let''s add some positive energy to your mood.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (84, 5, 2, '2025-05-02 02:38:15.182983-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (85, 5, 6, '2025-05-02 02:53:19.472366-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (86, 1, 2, '2025-05-02 03:19:52.408893-04', 'neutral', 'You''re feeling well, let''s add some positive energy to your mood.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (87, 1, 6, '2025-05-02 03:29:45.947579-04', 'positive', 'You''re feeling truly bright.');
INSERT INTO public.quiz_scores (id, user_id, score, date_completed, mood_category, message) VALUES (88, 1, -2, '2025-05-02 03:35:29.623409-04', 'neutral', 'You''re feeling bleh, here''s a boost of positivity.');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl1122_12
--

INSERT INTO public.users (user_id, firstname, lastname, email) VALUES (1, 'Courey', 'Jimenez', 'coureyfrance@gmail.com');
INSERT INTO public.users (user_id, firstname, lastname, email) VALUES (3, 'Courey', 'J', 'test@email.com');
INSERT INTO public.users (user_id, firstname, lastname, email) VALUES (4, 'Courey', 'Jimenez', 'testingemail@gmail.com');
INSERT INTO public.users (user_id, firstname, lastname, email) VALUES (5, 'Courey', 'Jimenez', 'coureychanel@gmail.com');


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.favorites_id_seq', 22, true);


--
-- Name: guest_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.guest_scores_id_seq', 5, true);


--
-- Name: guest_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.guest_user_id_seq', 1, false);


--
-- Name: quiz_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl1122_12
--

SELECT pg_catalog.setval('public.quiz_scores_id_seq', 88, true);


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
-- Name: guest guest_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl1122_12
--

ALTER TABLE ONLY public.guest
    ADD CONSTRAINT guest_pkey PRIMARY KEY (user_id);


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

