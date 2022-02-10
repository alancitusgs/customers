import React, { Component } from "react";
import $ from "jquery";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";

import Options from "../Organisms/Navigation/Options";

const withLayout = (propValue) => (WrappedComponent) => {
  return class withLayout extends Component {
    componentDidMount() {
      $(document).ready(function () {
        function addActive() {
          $(".sidenav-toggler").addClass("active");
          $(".sidenav-toggler").data("action", "sidenav-unpin");
          $("body")
            .removeClass("g-sidenav-hidden")
            .addClass("g-sidenav-show g-sidenav-pinned");
          $("body").append(
            '<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' +
              $("#sidenav-main").data("target") +
              " />"
          );
          Cookies.set("sidenav-state", "pinned");
        }
        function removeActive() {
          $(".sidenav-toggler").removeClass("active");
          $(".sidenav-toggler").data("action", "sidenav-pin");
          $("body")
            .removeClass("g-sidenav-pinned")
            .addClass("g-sidenav-hidden");
          $("body").find(".backdrop").remove();
          Cookies.set("sidenav-state", "unpinned");
        }

        function defaultPin() {
          Cookies.set("sidenav-state", "unpinned");
        }

        if (Cookies.get("sidenav-state") === "pinned") addActive();

        if (!Cookies.get("sidenav-state")) {
          defaultPin();
        }

        if ($(window).width() > 1200) {
          if (Cookies.get("sidenav-state") === "unpinned") {
            $("body")
              .removeClass("g-sidenav-show")
              .addClass("g-sidenav-hidden");
          }

          $("#sidenav-toggler-lg").on("click", function () {
            if (Cookies.get("sidenav-state") === "unpinned") {
              addActive();
            } else {
              removeActive();
            }
          });
        } else {
          $("body").on("click", "[data-action=sidenav-unpin]", function () {
            removeActive();
          });
          $("body").on("click", "[data-action=sidenav-pin]", function () {
            addActive();
          });
        }

        $(".sidenav").on("mouseenter", function () {
          $("body").hasClass("g-sidenav-pinned") ||
            $("body")
              .removeClass("g-sidenav-hide")
              .removeClass("g-sidenav-hidden")
              .addClass("g-sidenav-show");
        });
        $(".sidenav").on("mouseleave", function () {
          if (Cookies.get("sidenav-state") === "unpinned") {
            $("body")
              .removeClass("g-sidenav-show")
              .addClass("g-sidenav-hidden");
          }
        });

        $(window).on("resize", function () {
          if ($(window).width() < 768) {
            defaultPin();
            removeActive();

            $("body").on("click", "[data-action=sidenav-unpin]", function (t) {
              t.preventDefault();
              removeActive();
            });
            $("body").on("click", "[data-action=sidenav-pin]", function (t) {
              t.preventDefault();
              addActive();
            });

            $("#notify-dropdown")
              .removeClass("dropdown-menu-right")
              .addClass("dropdown-menu-left");
          } else {
            if (Cookies.get("sidenav-state") === "unpinned") {
              $("body")
                .removeClass("g-sidenav-show")
                .addClass("g-sidenav-hidden");
            }
          }
        });
      });
    }

    render() {
      return (
        <>
          <nav
            className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
            id="sidenav-main"
          >
            <div className="scrollbar-inner">
              <div className="sidenav-header d-flex align-items-center">
                <div className="ml-auto">
                  <div
                    id="sidenav-toggler-lg"
                    className="sidenav-toggler d-none d-xl-block"
                    data-action="sidenav-unpin"
                    data-target="#sidenav-main"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                      <i className="sidenav-toggler-line"></i>
                    </div>
                  </div>
                </div>
              </div>
              <Options />
            </div>
          </nav>

          <div className="main-content" id="panel">
            <WrappedComponent {...this.props} />
            <ToastContainer />
          </div>
        </>
      );
    }
  };
};

export default withLayout;
