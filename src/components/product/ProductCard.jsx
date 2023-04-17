import { Email } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../contexts/CartContexProvider";
import "./styles/ProductCard.css";
import moment from "moment";

const ProductCard = ({ item }) => {
  const {
    postLike,
    deleteLike,

    postFavorite,
    deleteFavorite,

    deleteProduct,
    getProducts,
  } = useProducts();

  const [time, setTime] = useState(null);

  const [isFavorite, setIsFavorite] = useState(item.is_favorite);
  const [isLiked, setIsLiked] = useState(item.is_liked);
  const [likesCount, setLikesCount] = useState(item.likes_count);
  const [likedUsers, setLikesUsers] = useState(item.liked_users);
  const [commentsCount, setCommentsCount] = useState(item.comments_count);
  const [owner, setOwner] = useState(item.owner);
  const [ownerUserName, setOwnerUserName] = useState(item.owner);

  const formData = new FormData();
  function handleLike() {
    formData.append("post", item.id);
    if (!isLiked) {
      setIsLiked(!isLiked);
      setLikesCount(likesCount + 1);
      setTime(Date.now());
      postLike(formData);
    } else {
      setIsLiked(!isLiked);
      setLikesCount(likesCount - 1);
      likedUsers.map((like) => {
        console.log(like.created_date);
        console.log(moment(like.created_date).format("DD.MM.YYYY HH:mm:ss"));
        console.log(moment(time).format("DD.MM.YYYY HH:mm:ss"));
        if (
          moment(like.created_date).format("DD.MM.YYYY HH:mm:ss") ===
          moment(time).format("DD.MM.YYYY HH:mm:ss ")
        ) {
          deleteLike(like.post);
        }
      });
    }
  }
  function handleFavorite() {
    formData.append("post", item.id);
    if (!isFavorite) {
      setIsFavorite(!isFavorite);
      postFavorite(formData);
    } else {
      setIsFavorite(!isFavorite);
      postFavorite(formData);
    }
  }
  useEffect(() => {
    getProducts();
  }, [isLiked]);
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <div className="border border-dark m-3">
      <img src={item.images} height={200} width={227} alt="photo" />
      <h3>{item.title}</h3>
      <p>{item.category_name}</p>
      {item.price ? <p>${item.price}</p> : <p>free</p>}
      <div>
        <IconButton onClick={handleLike}>
          <FavoriteIcon color={isLiked ? "error" : ""} />
          <p>{likesCount}</p>
        </IconButton>
        <IconButton onClick={handleFavorite}>
          <BookmarkIcon color={isFavorite ? "primary" : ""} />
        </IconButton>
        <IconButton>
          <CommentIcon />
          <p>{commentsCount}</p>
        </IconButton>
        <IconButton onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
        <button
          onClick={() => {
            // showProductDetails(formData);
            navigate(`/details/${item.id}`);
          }}
        >
          Details
        </button>
        <button onClick={() => deleteProduct(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
